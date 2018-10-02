# poc-dynamic-grid-react-redux

A simple POC about managing a dynamic grid with react and redux in a performatic way

In order to run it on your local machine you need to install parcel bundler

`npm install -g parcel-bundler`

And then run

`npm start`

## Grid data

```
{
   "gridColumns":{
      "ids":[
         "key",
         "name",
         "environment"
      ],
      "selectedIds":[
         "key",
         "name"
      ],
      "byId":{
         "key":{
            "id":"key",
            "name":"Test Case Key"
         },
         "name":{
            "id":"name",
            "name":"Test Case Name"
         },
         "environment":{
            "id":"environment",
            "name":"Environment"
         }
      }
   },
   "gridRows":{
      "ids":[
         "JQA-T0",
         "JQA-T1",
         "JQA-T2",
         "JQA-T3",
         "JQA-T4",
         "JQA-T5"
      ],
      "byId":{
         "JQA-T0":{
            "key":"JQA-T0",
            "name":"Test Case 0",
            "environment":"Environment 0"
         },
         "JQA-T1":{
            "key":"JQA-T1",
            "name":"Test Case 1",
            "environment":"Environment 1"
         },
         "JQA-T2":{
            "key":"JQA-T2",
            "name":"Test Case 2",
            "environment":"Environment 2"
         },
         "JQA-T3":{
            "key":"JQA-T3",
            "name":"Test Case 3",
            "environment":"Environment 3"
         },
         "JQA-T4":{
            "key":"JQA-T4",
            "name":"Test Case 4",
            "environment":"Environment 4"
         },
         "JQA-T5":{
            "key":"JQA-T5",
            "name":"Test Case 5",
            "environment":"Environment 5"
         }
      }
   }
}
```
