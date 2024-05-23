package com.library.api.services;

import com.library.api.dto.AuthorDTO;
import com.library.api.models.Author;
import com.library.api.repositories.AuthorRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AuthorService {
    private final AuthorRepository authorRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public AuthorService(AuthorRepository authorRepository, ModelMapper modelMapper) {
        this.authorRepository = authorRepository;
        this.modelMapper = modelMapper;
    }

    public AuthorDTO FromEntityToDTO(Author author) {
        return new AuthorDTO(
                author.getId(),
                author.getFirstName(),
                author.getLastName()
        );
    }

    public List<AuthorDTO> getAllAuthors() {
        List<Author> authorsList = authorRepository.findAll();
        return authorsList.stream().map(this::FromEntityToDTO).collect(Collectors.toList());
    }

    public AuthorDTO getAuthorById(Long authorId) {
        Author author = authorRepository.findById(authorId).orElseThrow(() -> new IllegalStateException("Author with id " + authorId + " does not exist!"));
        return this.modelMapper.map(author, AuthorDTO.class);
    }

    public void createAuthor(Author author) {
        authorRepository.save(author);
    }

    public void deleteAuthor(Long authorId) {
        boolean authorExist = authorRepository.existsById(authorId);
        if (!authorExist) {
            throw new IllegalStateException("Author with id " + authorId + " does not exist!");
        }
        authorRepository.deleteById(authorId);
    }

    @Transactional
    public void updateAuthor(
            Long authorId,
            Author author
    ) {
        Author authorData = authorRepository.findById(authorId).orElseThrow(() -> new IllegalStateException("Author with id " + authorId + " does not exist!"));
        if (authorData.getFirstName() != null && authorData.getFirstName().isEmpty() && !Objects.equals(authorData.getFirstName(), author.getFirstName())) {
            authorData.setFirstName(author.getFirstName());
        }
        if (authorData.getLastName() != null && !authorData.getLastName().isEmpty() && !Objects.equals(authorData.getLastName(), author.getLastName())) {
            authorData.setLastName(author.getLastName());
        }
        authorRepository.save(authorData);
    }
}
