package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<User>>getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping
    public ResponseEntity<User> addUser(
            @RequestBody User newUser) {
        User user = userService.addNewUser(newUser);
        return ResponseEntity.ok().body(user);
    }

}
