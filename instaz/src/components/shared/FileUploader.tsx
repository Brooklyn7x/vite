import { Upload } from "lucide-react";
import React, { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

interface FileUploaderProps {
  fieldChange: (files: File[]) => void;
  mediaUrl?: string;
}

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFiles(acceptedFiles);
      fieldChange(acceptedFiles);
      setUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [fieldChange] // Updated dependency
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".svg"] }, // Updated syntax
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {url ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10 border">
            <img
              src={url}
              alt="Uploaded file"
              className="w-full h-80 rounded-xl"
            />
          </div>
        </>
      ) : (
        <div className="h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top border flex flex-col items-center justify-center gap-3">
          <Upload />
          <h3 className="font-bold">Click Or Drop</h3>
          <p className="text-xs text-muted-foreground">SVG, PNG, JPG</p>
          <Button>Select</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
