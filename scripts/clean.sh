rm -rf .cache .nx dist node_modules || echo "Warning: Failed to remove directories"
echo "Finished removing directories"

# Remove all node_modules directories recursively in subfolders
find . -name "node_modules" -type d -prune -exec rm -rf '{}' + || echo "Warning: Failed to remove node_modules in subfolders"
echo "Finished removing all node_modules in subfolders"

yarn cache clean || echo "Warning: Failed to clean Yarn cache"
echo "Finished cleaning Yarn cache"

watchman watch-del-all || echo "Warning: Failed to clear Watchman watches"
echo "Finished clearing Watchman watches"

rm -fr $TMPDIR/haste-map-* || echo "Warning: Failed to remove Haste map cache"
echo "Finished removing Haste map cache"

rm -rf $TMPDIR/metro-cache || echo "Warning: Failed to remove Metro cache"
echo "Finished removing Metro cache"

