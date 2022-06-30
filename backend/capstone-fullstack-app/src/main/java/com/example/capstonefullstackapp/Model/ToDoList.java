//package com.example.capstonefullstackapp.Model;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name = "toDoList")
//public class ToDoList {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    @OneToOne(mappedBy = "toDoList")
//    private User user;
//
//    @OneToMany(mappedBy = "toDoList", cascade = CascadeType.ALL)
//    private List<ToDos> toDos;
//
//    public ToDoList() {
//    }
//
//    public ToDoList(User user) {
//        this.user = user;
////        this.toDos = new ArrayList<String>(List.of("My first to do!"));
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public List<ToDos> getToDos() {
//        return toDos;
//    }
//
//    public void setToDos(List<ToDos> toDos) {
//        this.toDos = toDos;
//    }
//}
