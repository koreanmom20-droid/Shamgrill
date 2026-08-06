param(
    [string]$src,
    [string]$dst,
    [int]$cropX = 0,
    [int]$cropY = 0,
    [int]$cropWidth = 0,
    [int]$cropHeight = 0
)

Add-Type -AssemblyName System.Drawing

$srcImg = [System.Drawing.Image]::FromFile($src)
if ($cropWidth -eq 0) { $cropWidth = $srcImg.Width }
if ($cropHeight -eq 0) { $cropHeight = [int]($srcImg.Height * 0.38) }

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
$bmp = New-Object System.Drawing.Bitmap($cropWidth, $cropHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$srcImg.Dispose()
Write-Host "Cropped successfully to $dst"
