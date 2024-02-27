# Mark Chilij TDL Winter School Final Task

Instruction for my project,
At first clone/download this repository

## How to install:

### Programm setup:    
  1) Install VSCode: https://code.visualstudio.com/download
  2) Install Note.js: https://nodejs.org/en/download/current
  3) Install Extesnions: ```Cucumber (Gherkin) Full Support ``` and ```Material Icon Theme```

 ### Terminal commands setup:           
  1: ```npm install ```    
  2: ```npm init wdio@latest . ```   
  3:```npm install assert```    
  4: ```npm install @wdio/allure-reporter --save-dev```    
    
  ### To run tests:    
   Run all test: ```npm run wdio```    
   Run test by tag(Test1,Test2...): ```npm run tag -- "@Test2"```    
   Run allure report: ```npm run allure```   
  PS:
  To view a screenshot of the error go to: Suites -> Select test with error -> On the right, find and open the failed steps.
    
### Some comments about project:     
  For select any/first product,I doesn't use a filter, since it does not work on website. You need manualy choose "M" or "L" size   
  For Step-definition: I didn't create other files like "productList.js", because I doesn't have tests for home page (body)
