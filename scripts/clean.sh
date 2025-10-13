rm -rf .cache .turbo dist node_modules || echo "Warning: Failed to remove directories"
echo "Finished removing directories"

# Remove all node_modules directories recursively in subfolders
find . -name "node_modules" -type d -prune -exec rm -rf '{}' + || echo "Warning: Failed to remove node_modules in subfolders"
echo "Finished removing all node_modules in subfolders"

find . -name ".expo" -type d -prune -exec rm -rf '{}' + || echo "Warning: Failed to remove .expo directories"
echo "Finished removing all .expo directories"

find . -name ".turbo" -type d -prune -exec rm -rf '{}' + || echo "Warning: Failed to remove .turbo directories"
echo "Finished removing all .turbo directories"

find . -name ".next" -type d -prune -exec rm -rf '{}' + || echo "Warning: Failed to remove .next directories"
echo "Finished removing all .next directories"

yarn cache clean || echo "Warning: Failed to clean Yarn cache"
echo "Finished cleaning Yarn cache"

watchman watch-del-all || echo "Warning: Failed to clear Watchman watches"
echo "Finished clearing Watchman watches"

rm -fr $TMPDIR/haste-map-* || echo "Warning: Failed to remove Haste map cache"
echo "Finished removing Haste map cache"

rm -rf $TMPDIR/metro-cache || echo "Warning: Failed to remove Metro cache"
echo "Finished removing Metro cache"

