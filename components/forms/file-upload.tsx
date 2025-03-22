"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

interface FileUploadProps {
  label: string
  description: string
  onUpload: (files: File[]) => void
}

export function FileUpload({ label, description, onUpload }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
      onUpload([...files, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-4">
        <Card className="p-4 border-dashed">
          <label className="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm font-medium">Click to upload or drag and drop</span>
            <span className="text-xs text-muted-foreground">Supported formats: PNG, JPG, PDF (max 10MB)</span>
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
              accept=".png,.jpg,.jpeg,.pdf"
            />
          </label>
        </Card>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                <span className="text-sm truncate">{file.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}