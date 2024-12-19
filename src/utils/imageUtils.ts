/**
 * Processes an image data URL for API consumption
 */
export const processImageForAPI = (imageDataUrl: string): { data: string; mimeType: string } => {
  const base64Data = imageDataUrl.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  return {
    data: base64Data,
    mimeType: 'image/png'
  };
};