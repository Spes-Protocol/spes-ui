import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import InputWrapper from './InputWrapper'
import UploadIcon from '@mui/icons-material/Upload';


export default function Avatar({ url, size, onUpload }: { url: string, size: number, onUpload: (a: string) => void }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data!)
      setAvatarUrl(url)
    } catch (error: any) {
      console.log('Error downloading image: ', error.message)
    }
  }


  async function uploadAvatar(event: any) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error: any) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <InputWrapper titleVariant='body1' title={'Upload your campaign avatar'}>
      {avatarUrl ? (
        <Box width={500} height={500} position='relative'>
          <Image
            src={avatarUrl}
            alt="Avatar"
            className="avatar image"
            layout={'fill'} 
            objectFit={'contain'}
          />
        </Box>
        
      ) : null}
              <Button
                  startIcon={<UploadIcon />}
                  variant="contained"
                  color='secondary'
                  component="label"
                  size='large'
                  sx={{ letterSpacing: 1.5 }}
                  disabled={uploading}
                  >
                  {uploading ? 'Uploading ...' : 'Upload Files'}
                  <input
                      type="file"
                      hidden
                      id="single"
                      accept="image/*"
                      onChange={uploadAvatar}
                  />
              </Button>
          </InputWrapper>
    </div>
  )
}