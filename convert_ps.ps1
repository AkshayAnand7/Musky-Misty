$sourceDir = ".\Perfume_"
$targetDir = ".\assets\products"
$cwebp = ".\libwebp_extracted\libwebp-1.3.2-windows-x64\bin\cwebp.exe"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

function Get-Slug($name) {
    $s = $name.ToLower() -replace '[^a-z0-9]+', '-' -replace '^-|-$', ''
    
    if ($name -eq "Aventus") { return "aventus" }
    if ($name -eq "Farenheit") { return "farenheit" }
    if ($name -eq "Poison") { return "poison" }
    if ($name -eq "Sauvage") { return "sauvage" }
    if ($name -eq "212 Sexy Men") { return "212-sexy-men" }
    if ($name -eq "Good Girl") { return "good-girl" }
    if ($name -eq "One & Only") { return "one-only" }
    if ($name -eq "Armani Stronger with you") { return "stronger-with-you" }
    if ($name -eq "JPG Ultramale") { return "ultramale" }
    
    return $s
}

$files = Get-ChildItem -Path $sourceDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg)$' }

foreach ($file in $files) {
    $baseName = $file.BaseName
    $slug = Get-Slug $baseName
    $targetPath = Join-Path $targetDir "$slug.webp"
    
    Write-Host "Converting $($file.Name) -> $slug.webp"
    
    # Run cwebp
    $args = @("-q", "80", $file.FullName, "-o", $targetPath)
    & $cwebp $args | Out-Null
}

Write-Host "Conversion complete."

# Cleanup
Remove-Item -Recurse -Force $sourceDir
Remove-Item -Recurse -Force ".\libwebp_extracted"
Remove-Item -Force ".\libwebp.zip"
Remove-Item -Force ".\download_webp.ps1"
Remove-Item -Force ".\convert.js"

Write-Host "Cleanup complete."
