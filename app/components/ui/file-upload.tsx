"use client"
import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useDropzone } from "react-dropzone"
import { GrFormUpload } from "react-icons/gr"
import Image from "next/image"

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

export const FileUpload = ({ onChange, isFinished }: FileUploadProps) => {
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
            <motion.div
                onClick={handleClick}
                whileHover="animate"
                className="group/file block rounded-lg w-full relative overflow-hidden cursor-pointer"
            >
                <input
                    ref={fileInputRef}
                    id="file-upload-handle"
                    type="file"
                    onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
                    className="hidden"
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                    <GridPattern />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full my-5 max-w-xl mx-auto">
                        {files.length > 0 && files.map((file, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                                    <GridPattern />
                                </div>
                                <motion.div
                                    key={"file" + idx}
                                    layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                                    className={cn(
                                        "relative mt-4 mx-auto p-4 flex flex-col items-start justify-start w-full md:h-32 rounded-md overflow-hidden z-40",
                                        ""
                                    )}
                                >
                                    <div className="flex flex-col justify-center items-center gap- w-full">
                                        {previews[file.name] && (
                                            <Image
                                                src={previews[file.name]}
                                                alt={file.name}
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-cover"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                layout
                                                className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                                            >
                                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                        {!files.length && (
                            <motion.div
                                layoutId="file-upload"
                                variants={mainVariant}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className={cn(
                                    "relative mt-3 mx-auto group-hover/file:shadow-lg bg-white dark:bg-neutral-900 flex items-center justify-center w-full max-w-[8rem] h-24 rounded-md z-40",
                                    "border"
                                )}
                            >
                                {isDragActive ? (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col justify-center items-center text-xs text-neutral-600"
                                    >
                                        <GrFormUpload className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                                        <p>Solte aqui a foto</p>
                                    </motion.p>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col justify-center items-center text-xs text-neutral-600"
                                    >
                                        <GrFormUpload className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
                                        <p>Escolha uma foto</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                        {!files.length && (
                            <motion.div
                                variants={secondaryVariant}
                                className="absolute mx-auto w-full max-w-[8rem] h-24 flex items-center justify-center rounded-md opacity-0 border border-dashed border-[#0A66C2] inset-0 bg-transparent z-30"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export const GridPattern = () => {
    const columns = 41
    const rows = 11

    return (
        <div className="flex justify-center items-center gap-x-px gap-y-px flex-shrink-0 flex-wrap bg-gray-100 dark:bg-neutral-900 scale-105">
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: columns }).map((_, col) => {
                    const index = row * columns + col

                    return (
                        <div
                            key={`${col}-${row}`}
                            className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                                index % 2 === 0
                                ? "bg-gray-50 dark:bg-neutral-950"
                                : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                            }`}
                        />
                    )
                })
            )}
        </div>
    )
}