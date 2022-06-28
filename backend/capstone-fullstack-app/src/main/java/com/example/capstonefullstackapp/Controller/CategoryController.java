package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Repository.CategoryRepository;
import com.example.capstonefullstackapp.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> allCategories = categoryService.getAllCategories();
        return ResponseEntity.ok().body(allCategories);
    }

    @GetMapping("/{categoryId}/pages")
    public ResponseEntity<List<Page>> getAllPagesByCategory(@PathVariable Long categoryId){
        List<Page> pages = categoryService.getPagesByCategory(categoryId);
        return ResponseEntity.ok().body(pages);
    }

    @PostMapping
    public ResponseEntity<Category> addNewCategory(@RequestBody Category categoryToAdd) {
        Category newCategory = categoryService.addNewCategory(categoryToAdd);
        return ResponseEntity.ok().body(newCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category updatedCategoryInfo){
        Category updatedCategory = categoryService.updateCategory(id, updatedCategoryInfo);
        return ResponseEntity.ok().body(updatedCategory);
    }

    @PutMapping("/{categoryId}/page/{pageId}")
    public ResponseEntity<Category> addPageToCategory(@PathVariable Long categoryId, @PathVariable Long pageId){
        Category category = categoryService.addNewPageToCategory(categoryId, pageId);
        return ResponseEntity.ok().body(category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category deleted");
    }


}
