"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useState } from "react";
import { promises } from "dns"

interface AddJsonDataDialogProps {
    onSave : (name:string, value : string) => Promise<void> 
}
  
export default function AddJsonDataDialog({onSave} : AddJsonDataDialogProps) {
    const [jsonData, setJsonData] = useState('');
    const [jsonName, setJsonName] = useState('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    async function handleSave() {
        await onSave(jsonName, jsonData);
        setOpenModal(false);
        setJsonData('');
        setJsonName('');
    }
    
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger>
            <Button>Add Json Data</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
            <DialogHeader>
            <DialogTitle>Json Editor</DialogTitle>
            <DialogDescription>
                Edit and Save Your Json Data
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label>JSON Name </Label>
                    <Input value={jsonName} placeholder="Enter Json Name" className="rounded-none" onChange={function(e){
                        setJsonName(e.target.value)
                    }}/>
                </div>
                <div className="grid gap-2">
                    <Label>JSON Data </Label>
                    <CodeMirror value={jsonData} height="200px" extensions={[json()]} onChange={(value) => setJsonData(value)} className="border shadow-sm" />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant='secondary'>
                            Close
                        </Button>
                        
                    </DialogClose>
                    <Button disabled={!jsonName || !jsonData} onClick={handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </div>
        </DialogContent>
    </Dialog>


  )
}

