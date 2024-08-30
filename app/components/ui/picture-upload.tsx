import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import { FileIcon, XIcon } from "lucide-react";
import "@uploadthing/react/styles.css";

interface PictureUploadProps {
    endpoint: "uploadImage";
    value: string | File; // Aceita string (URL) ou File
    onChange: (url?: string) => void;
}

export const PictureUpload = ({ endpoint, value, onChange }: PictureUploadProps) => {
    const isFile = value instanceof File;
    const fileType = isFile ? value.type.split("/").pop() : value?.split(".").pop();

    if (isFile) {
        // Display preview of file
        const objectUrl = URL.createObjectURL(value);
        return (
            <div className="relative w-32 h-32 mx-auto">
                <div className="w-full h-full bg-black rounded-full overflow-hidden">
                    <Image
                        fill
                        src={objectUrl}
                        alt="Uploaded Image"
                        className="flex mx-auto rounded-full overflow-hidden object-cover"
                    />
                </div>
                <div className="absolute top-0 right-3">
                    <button
                        onClick={() => onChange("")}
                        className="p-1 text-white bg-rose-500 rounded-full shadow-sm"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    if (value && fileType === "pdf") {
        return (
            <div className="relative p-2 mt-2 flex items-center bg-indigo-200 rounded-md">
                <FileIcon className="w-10 h-10 fill-indigo-200 stroke-indigo-400" />
                <a href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm text-indigo-500 hover:underline"
                >
                    {value}
                </a>
                <div className="absolute -top-2 -right-2">
                    <button
                        onClick={() => onChange("")}
                        className="p-1 text-white bg-rose-500 rounded-full shadow-sm"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    // Handle the UploadDropzone
    return (
        <UploadDropzone
            className="border-black dark:border-[#333]"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                // Ensure res[0] exists and has a URL
                if (res?.[0]?.url) {
                    onChange(res[0].url);
                }
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    );
}