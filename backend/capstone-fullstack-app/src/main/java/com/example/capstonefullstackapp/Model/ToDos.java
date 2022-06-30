//package com.example.capstonefullstackapp.Model;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//
//@Entity
//public class ToDos {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    private String content;
//
//    @ManyToOne
//    @JsonIgnoreProperties("toDos")
//    private ToDoList toDoList;
//
//    public ToDos() {
//    }
//
//    public ToDos(String content, ToDoList toDoList) {
//        this.content = content;
//        this.toDoList = toDoList;
//    }
//}
