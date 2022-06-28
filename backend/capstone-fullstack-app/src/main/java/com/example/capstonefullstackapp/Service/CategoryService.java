package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.CategoryRepository;
import com.example.capstonefullstackapp.Repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    PageRepository pageRepository;

    public Category addNewCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category addNewPageToCategory(Long categoryId, Long newPageId) {
        Category category = categoryRepository.findById(categoryId).get();
        Page newPage = pageRepository.findById(newPageId).get();
        category.addNewPageToCategory(newPage);
        newPage.setCategory(category);
        pageRepository.save(newPage);
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category updateCategory(Long id, Category updatedCategoryInfo) {
        Category oldCategory = categoryRepository.findById(id).get();
        oldCategory.setTitle(updatedCategoryInfo.getTitle());
        return categoryRepository.save(oldCategory);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public List<Page> getPagesByCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId).get();
        return category.getPages();
    }
}
