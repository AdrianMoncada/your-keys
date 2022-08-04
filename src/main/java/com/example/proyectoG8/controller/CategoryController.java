package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/{id}")
    public ResponseEntity<?> searchCategory(@PathVariable Long id){
        return new ResponseEntity(iCategoryService.readCategory(id), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        return new ResponseEntity(iCategoryService.createCategory(category), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        return new ResponseEntity(iCategoryService.updateCategory(category), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        iCategoryService.deleteCategory(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> searchAllCategory(){
        return new ResponseEntity(iCategoryService.listCategory(),HttpStatus.OK);
    }

}
