package com.example.capstonefullstackapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    // cascade - delete category then it would delete all the pages relating to it
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Page>pages;

    @ManyToOne
    @JsonIgnoreProperties(value = "categories")
    private User user;

    public Category() {
    }

    public Category(String title, List<Page> pages, User user) {
        this.title = title;
        this.pages = pages;
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Page> getPages() {
        return pages;
    }

    public void setPages(List<Page> pages) {
        this.pages = pages;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void addNewPageToCategory(Page page) {this.pages.add(page);}

}
