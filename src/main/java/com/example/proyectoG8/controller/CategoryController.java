package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.dto.CategoryDTO;
import com.example.proyectoG8.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> searchCategory(@PathVariable Long id) {
        if (iCategoryService.readCategory(id) != null) {

            return new ResponseEntity(iCategoryService.readCategory(id), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @PostMapping
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO categoryDTO) {

        return new ResponseEntity(iCategoryService.createCategory(categoryDTO), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO categorydto) {
        if (iCategoryService.readCategory(categorydto.getId_category()) != null) {
            return new ResponseEntity(iCategoryService.updateCategory(categorydto), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CategoryDTO> deleteCategory(@PathVariable Long id) {
        if (iCategoryService.readCategory(id) != null) {
            iCategoryService.deleteCategory(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> searchAllCategory() {
        return  new ResponseEntity(iCategoryService.listCategory(), HttpStatus.OK);
    }

}
