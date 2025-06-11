import os

folder_path = './'

for filename in os.listdir(folder_path):
    name, ext = os.path.splitext(filename)
    new_name = name.replace('_icon', '').lower() + ext.lower()

    if new_name != filename:
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)
        
        if os.path.exists(new_path):
            os.remove(old_path)
            print(f'Deleted: {filename} (already exists as {new_name})')
        else:
            os.rename(old_path, new_path)
            print(f'Renamed: {filename} -> {new_name}')

input("Press Enter to exit...")