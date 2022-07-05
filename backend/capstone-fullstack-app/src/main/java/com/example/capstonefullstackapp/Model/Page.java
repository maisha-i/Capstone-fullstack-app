package com.example.capstonefullstackapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "pages")
public class Page {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String title;
    @Column(length=65535)
    private String content;
    @Column
    @Enumerated
    private Backgrounds background;

    @ManyToOne
    @JsonIgnoreProperties(value = "pages")
    private Category category;

    public Page() {
    }

    public Page(String title, String content, Backgrounds background, Category category) {
        this.title = title;
        this.content = content;
        this.background = background;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Backgrounds getBackground() {
        return background;
    }

    public void setBackground(Backgrounds background) {
        this.background = background;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
