package com.debology.student_system.controller;

import com.debology.student_system.model.Student;
import com.debology.student_system.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "new student is added";
    }

    @GetMapping("/get")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }


}
