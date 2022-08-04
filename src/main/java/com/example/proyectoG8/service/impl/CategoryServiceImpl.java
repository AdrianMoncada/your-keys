package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.repository.ICategoryRepository;
import com.example.proyectoG8.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public Category createCategory(Category category) {
        return iCategoryRepository.save(category);
    }

    @Override
    public Category readCategory(Long id) {
        Category category = null;
        if (iCategoryRepository.findById(id).isPresent()){
            category = iCategoryRepository.findById(id).get();
        }

        return category;
    }

    @Override
    public Category updateCategory(Category category) {
        return iCategoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        iCategoryRepository.deleteById(id);
    }

    @Override
    public List<Category> listCategory() {
        return iCategoryRepository.findAll();
    }
}
