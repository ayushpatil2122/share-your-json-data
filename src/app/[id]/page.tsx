'use client'

import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useEffect, useState } from 'react';
import { JsonData } from '@prisma/client';

interface SharedJsonParams {
    params : {
        id : string
    }
}

export default function ({params} : SharedJsonParams) {
const {id} = params

const [jsonData, setJsonData] = useState<JsonData>();
  const [loading, setLoading] = useState<boolean>(true);

  

  useEffect(function(){
    async function fetchData() {
        try {
          const response = await fetch(`/api/json/${id}`)
          const data = await response.json();
          setJsonData(data);
          setLoading(false)
        } catch (error) {
          console.error("filed to fetch the data", error)
          setLoading(false)
        }
      }
    fetchData();
  }, [id])

  if(loading){
    return <div>
        Loading ...
    </div>
  }

    return <div className="mt-8 space-y-4">
        <h1 className="text-2xl underline font-bold">
            {jsonData?.name}
        </h1>
        <CodeMirror 
        value={jsonData?.content || ''} 
        height="200px" 
        extensions={[json()]} 
        editable = {false}
        className="border shadow-sm" />
    </div>
}