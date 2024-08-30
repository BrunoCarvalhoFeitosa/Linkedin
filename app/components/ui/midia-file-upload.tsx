"use client"
import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useDropzone } from "react-dropzone"
import { GrFormUpload } from "react-icons/gr"
import Image from "next/image"
import { AiFillPicture } from "react-icons/ai"

const mainVariant = {
    initial: {
        x: 0,
        y: 0,
    },
    animate: {
        x: 20,
        y: -20,
        opacity: 0.9,
    },
}

const secondaryVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
}

interface FileUploadProps {
    onChange?: (files: File[]) => void
    isFinished: boolean
}

export const MidiaFileUpload = ({ onChange, isFinished }: FileUploadProps) => {
    const [files, setFiles] = useState<File[]>([])
    const [previews, setPreviews] = useState<{ [key: string]: string }>({})
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (newFiles: File[]) => {
        const newPreviews: { [key: string]: string } = {}
        newFiles.forEach(file => {
            const url = URL.createObjectURL(file)
            newPreviews[file.name] = url
        })

        setFiles((prevFiles) => [...prevFiles, ...newFiles])
        setPreviews((prevPreviews) => ({ ...prevPreviews, ...newPreviews }))
        onChange && onChange(newFiles)
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const clearInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
            setFiles([])
            setPreviews({})
        }
    }

    useEffect(() => {
        if (isFinished) {
            clearInput()
        }
    }, [isFinished])

    const { getRootProps, isDragActive } = useDropzone({
        multiple: false,
        noClick: true,
        onDrop: handleFileChange,
        onDropRejected: (error: any) => {
            console.log(error)
        },
    })

    return (
        <div className="w-full" {...getRootProps()}>
            <div
                onClick={handleClick}
                className="relative group/file block rounded-lg w-full cursor-pointer"
            >
                <input
                    ref={fileInputRef}
                    id="file-upload-handle"
                    type="file"
                    onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
                    className="hidden"
                />
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full my-5 max-w-xl mx-auto">
                        {files.length > 0 && files.map((file, idx) => (
                            <div key={idx} className="flex justify-center items-center">
                                <div className="absolute -top-4 -right-1 flex justify-center items-center w-6 h-6 text-xs font-semibold text-white rounded-full bg-[#0A66C2]">
                                    1
                                </div>
                                <AiFillPicture className="w-6 h-6 text-neutral-600 dark:text-white" />
                            </div>
                        ))}
                        {!files.length && (
                            <div className="relative mx-auto dark:bg-neutral-900 flex items-center justify-center w-full rounded-md z-40">
                                {isDragActive ? (
                                    <div className="flex flex-col justify-center items-center text-xs text-neutral-600">
                                        <AiFillPicture className="w-6 h-6 text-neutral-600 dark:text-white" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center items-center text-xs text-neutral-600">
                                        <AiFillPicture className="w-6 h-6 text-neutral-600 dark:text-white" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}