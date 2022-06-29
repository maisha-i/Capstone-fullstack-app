package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Model.Backgrounds;
import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Repository.CategoryRepository;
import com.example.capstonefullstackapp.Service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/page")
public class PageController {

    @Autowired
    PageService pageService;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping
    public ResponseEntity<List<Page>> getAllPages() {
        List<Page> pages = pageService.getAllPages();
        return ResponseEntity.ok().body(pages);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Page> getPageById(Long id) {
        Page page = pageService.getPage(id);
        return ResponseEntity.ok().body(page);
    }

//    @PostMapping
//    public ResponseEntity<Page> addPage(
//            @RequestBody Page newPage) {
//        Page page = pageService.addNewPage(newPage);
//        return ResponseEntity.ok().body(page);
//    }

    @DeleteMapping("/deletePage/{id}")
    public void deletePage(@PathVariable Long id) {
        pageService.deletePage(pageService.getPage(id));
    }


    @PostMapping("/createpage")
    public void createPage(@RequestParam String title,
                           @RequestParam String content,
                           @RequestParam(required = false) Backgrounds background,
                           @RequestParam(required = false) Long category_id) {
        Category category = categoryRepository.findById(category_id).get();
        Page newPage = new Page(title, content, background, category);
        category.addNewPageToCategory(newPage);
        pageService.savePage(newPage);
    }

    @PutMapping("updatePage/{id}")
    public ResponseEntity<Page> updatePage(@PathVariable Long id, @RequestBody Page updatedPages) {
        Page updatedPage = pageService.updatePage(id, updatedPages);
        return ResponseEntity.ok().body(updatedPage);
    }

}
