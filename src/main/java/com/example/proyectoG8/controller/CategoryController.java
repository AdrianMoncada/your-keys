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
        if (iCategoryService.readCategory(id) != null){

            return new ResponseEntity(iCategoryService.readCategory(id), HttpStatus.FOUND);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @PostMapping
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        return new ResponseEntity(iCategoryService.createCategory(category), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        if (iCategoryService.readCategory(category.getId_category()) != null){
            return new ResponseEntity(iCategoryService.updateCategory(category), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        if(iCategoryService.readCategory(id) != null){
            iCategoryService.deleteCategory(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @GetMapping
    public ResponseEntity<?> searchAllCategory(){
        return new ResponseEntity(iCategoryService.listCategory(),HttpStatus.OK);
    }

}
