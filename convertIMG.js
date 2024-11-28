export async function uploadToImgBB(base64Image) {
    const apiKey = 'b90f40690f08136b22333541a808ed66';
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    const formData = new FormData();
    formData.append('image', base64Image.split(',')[1]); // Remove the `data:image/...;base64,` prefix

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.url; 
        } else {
            throw new Error('Failed to upload image');
        }
    } catch (error) {
        console.error(error);
        alert('Image upload failed!');
        return null;
    }
}