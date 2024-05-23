package com.library.api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(
            name = "title",
            nullable = false
    )
    private String title;
    @Column(
            name = "publishingHouse",
            nullable = false
    )
    private String publishingHouse;
    @Column(
            name = "languageOriginal",
            nullable = false
    )
    private String languageOriginal;
    @Column(
            name = "numberOfPages",
            nullable = false
    )
    private Integer numberOfPages;
    @Column(
            name = "publicationDate",
            nullable = false
    )
    private LocalDate publicationDate;
    @Column(
            name = "type",
            nullable = false
    )
    private String type;
    @Column(
            name = "cover",
            nullable = false
    )
    private String cover;
    @Column(
            name = "height",
            nullable = false
    )
    private Double height;
    @Column(
            name = "width",
            nullable = false
    )
    private Double width;
    @Column(
            name = "depth",
            nullable = false
    )
    private Double depth;
    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;
    @ManyToOne
    @JoinColumn(name = "translator_id")
    private Translator translator;
}
