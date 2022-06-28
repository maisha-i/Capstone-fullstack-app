package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Model.Backgrounds;
import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/page")
public class PageController {

    @Autowired
    PageService pageService;

    @GetMapping
    public ResponseEntity<List<Page>>getAllPages(){
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
    public void deletePage(@PathVariable Long id){pageService.deletePage(pageService.getPage(id));
    }



    @PostMapping("/createpage")
    public void createPage(@RequestParam String title,
                           @RequestParam String content,
                           @RequestParam(required = false) Backgrounds background) {
        Page newPage = new Page();
        pageService.savePage(newPage);
    }
}
