"use client"

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import JsonDataTable from './json-data-table'
import AddJsonDataDialog from './add-json-data-dialog'
  
export default function JsonEditor() {

  const [refreshKey, setRefreshKey] = useState(0);

  async function handleSave(jsonName : string , jsonData : string) {
    const response = await fetch('/api/json', {
      method : 'POST',
      headers : {'Content-Type' : 'application-json'},
      body : JSON.stringify({name : jsonName, content : jsonData})
    })

    if(response.ok) {
      setRefreshKey(function(prev){
        return prev + 1;
      });
      console.log('Data Added Successfully added')
    } else {
      console.log('Something Went Wrong')
    }
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Saved Json Data</CardTitle>
            <CardDescription>View and Share Your Saved Json Data</CardDescription>
        </CardHeader>
        <CardContent>
            <JsonDataTable key={refreshKey}/>
        </CardContent>
        <CardFooter>
          <AddJsonDataDialog onSave={handleSave}/>
        </CardFooter>
    </Card>

  )
}

 
