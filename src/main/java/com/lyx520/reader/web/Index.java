package com.lyx520.reader.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Index {



    @GetMapping("/")
    public String index(){
        System.out.println("index cast");
        return "index";
    }
}
