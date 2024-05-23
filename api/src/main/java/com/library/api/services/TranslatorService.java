package com.library.api.services;

import com.library.api.dto.TranslatorDTO;
import com.library.api.models.Author;
import com.library.api.models.Translator;
import com.library.api.repositories.TranslatorRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TranslatorService {
    private final TranslatorRepository translatorRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public TranslatorService(TranslatorRepository translatorRepository, ModelMapper modelMapper) {
        this.translatorRepository = translatorRepository;
        this.modelMapper = modelMapper;
    }

    public TranslatorDTO FromEntityToDTO(Translator translator) {
        return new TranslatorDTO(
                translator.getId(),
                translator.getFirstName(),
                translator.getLastName(),
                translator.getLanguageRelease()
        );
    }

    public List<TranslatorDTO> getAllTranslators() {
        List<Translator> translatorsList = translatorRepository.findAll();
        return translatorsList.stream().map(this::FromEntityToDTO).collect(Collectors.toList());
    }

    public TranslatorDTO getTranslatorById(Long translatorId) {
        Translator translator = translatorRepository.findById(translatorId).orElseThrow(() -> new IllegalStateException("Translator with id " + translatorId + " does not exist!"));
        return this.modelMapper.map(translator, TranslatorDTO.class);
    }

    public void createTranslator(Translator translator) {
        translatorRepository.save(translator);
    }

    public void deleteTranslator(Long translatorId) {
        boolean translatorExist = translatorRepository.existsById(translatorId);
        if (!translatorExist) {
            throw new IllegalStateException("Translator with id " + translatorId + " does not exist!");
        }
        translatorRepository.deleteById(translatorId);
    }

    @Transactional
    public void updateTranslator(
            Long translatorId,
            Translator translator
    ) {
        Translator translatorData = translatorRepository.findById(translatorId).orElseThrow(() -> new IllegalStateException("Author with id " + translatorId + " does not exist!"));
        if (translatorData.getFirstName() != null && !translatorData.getFirstName().isEmpty() && !Objects.equals(translatorData.getFirstName(), translator.getFirstName())) {
            translatorData.setFirstName(translator.getFirstName());
        }
        if (translatorData.getLastName() != null && !translatorData.getLastName().isEmpty() && !Objects.equals(translatorData.getLastName(), translator.getLastName())) {
            translatorData.setLastName(translator.getLastName());
        }
        if (translatorData.getLanguageRelease() != null && !translatorData.getLanguageRelease().isEmpty() && !Objects.equals(translatorData.getLanguageRelease(), translator.getLanguageRelease())) {
            translatorData.setLanguageRelease(translator.getLanguageRelease());
        }
        translatorRepository.save(translatorData);
    }
}
