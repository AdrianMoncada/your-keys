package com.example.proyectoG8;

import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.service.ICategoryService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;

@SpringBootTest
public class CategoryDTOTest {

    @Autowired
    ICategoryService iCategoryService;

    @Test
    @Order(1)
    void testCreateCategory() {
        Category category = new Category();
        category.setTitle("Titulo de prueba");
        category.setDescription("Descripción de prueba");
        category.setUrlImage("Imagen de prueba");

        iCategoryService.createCategory(category);
        Category category1 = iCategoryService.readCategory(1L);

        Assert.notNull(category1);

    }

    @Test
    @Order(2)
    void testGetCategories(){
        List<Category> categories = iCategoryService.listCategory();
        Assert.notEmpty(categories);
        Assert.isTrue(categories.size() == 1);
    }

    @Test
    @Order(3)
    void deleteCategory(){
        iCategoryService.deleteCategory(1L);
        Assert.isNull(iCategoryService.readCategory(1L));
    }
}
