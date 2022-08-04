package com.example.proyectoG8.service;

import com.example.proyectoG8.model.Category;

import java.util.List;

public interface ICategoryService {

    public Category createCategory(Category category);

    public Category readCategory(Long id);

    public Category updateCategory(Category category);

    public void deleteCategory(Long id);

    public List<Category> listCategory();

}
