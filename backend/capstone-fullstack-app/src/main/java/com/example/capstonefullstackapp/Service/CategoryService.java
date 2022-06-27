package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public Category addNewCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category addNewPageToCategory(Page newPage, Category category) {
        category.addNewPageToCategory(newPage);
        return categoryRepository.save(category);
    }

}
