package com.example.capstonefullstackapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = "user")
    private List<Category>categories = new ArrayList<>();

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "toDoList_id", referencedColumnName = "id")
//    private ToDoList toDoList;

    public User() {
    }

    public User(String name, String email, String password) {
        this.id = 0L;
        this.name = name;
        this.email = email;
        this.password = password;
//        this.toDoList = new ToDoList();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

//    public ToDoList getToDoList() {
//        return toDoList;
//    }
//
//    public void setToDoList(ToDoList toDoList) {
//        this.toDoList = toDoList;
//    }

    public void addNewCategory(Category category) {this.categories.add(category);}
}
