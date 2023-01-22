import os

if __name__ == "__main__":
    curr_dir = os.path.dirname(os.path.realpath(__file__))
    gr_output = open(f"{curr_dir}/gradio_output.txt", "r").readlines()
    for line in gr_output:
        if len(line.split()) > 0 and line.split()[0] == "Running": # Running on public URL: ur
            url_gradio = line.split()[4].strip()
            text_file = open(f"{curr_dir}/link.txt", "w")
            n = text_file.write(url_gradio)
            text_file.close()

    os.system(f"git add {curr_dir}/link.txt")
    os.system(f"git commit -m 'update link'")
    os.system(f"git push")