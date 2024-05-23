package com.library.api.controllers;

import com.library.api.dto.TranslatorDTO;
import com.library.api.models.Translator;
import com.library.api.services.TranslatorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/translators")
@CrossOrigin
public class TranslatorController {
    private final TranslatorService translatorService;

    public TranslatorController(TranslatorService translatorService) {
        this.translatorService = translatorService;
    }

    @GetMapping
    public List<TranslatorDTO> getAllTranslators() {
        return translatorService.getAllTranslators();
    }

    @GetMapping("/{translatorId}")
    public TranslatorDTO getAuthorById(@PathVariable("translatorId") Long translatorId) {
        return translatorService.getTranslatorById(translatorId);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAuthor(@RequestBody Translator translator) {
        translatorService.createTranslator(translator);
        return ResponseEntity.ok("Successfully! The translator has been created.");
    }

    @PutMapping("/update/{translatorId}")
    public ResponseEntity<String> updateBook(@PathVariable("translatorId") Long translatorId, @RequestBody Translator translator) {
        translatorService.updateTranslator(translatorId, translator);
        return ResponseEntity.ok("Successfully! The translator has been updated.");
    }

    @DeleteMapping("/delete/{translatorId}")
    public ResponseEntity<String> deleteAuthor(@PathVariable("translatorId") Long translatorId) {
        translatorService.deleteTranslator(translatorId);
        return ResponseEntity.ok("Successfully! The translator has been removed.");
    }
}
