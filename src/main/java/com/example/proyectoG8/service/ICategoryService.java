package com.example.proyectoG8.service;

import com.example.proyectoG8.model.dto.CategoryDTO;

import java.util.List;

public interface ICategoryService {

    public CategoryDTO createCategory(CategoryDTO categoryDTO);

    public CategoryDTO readCategory(Long id);

    public CategoryDTO updateCategory(CategoryDTO categoryDTO);

    public void deleteCategory(Long id);

    public List<CategoryDTO> listCategory();

}
