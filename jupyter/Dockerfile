FROM georgejose/jupyter_base

RUN mkdir -p /root/.jupyter/

COPY jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py

EXPOSE 500

CMD ["/bin/bash", "-c", "/opt/conda/bin/jupyter notebook --notebook-dir=/opt/notebooks --ip='*' --port=500 --no-browser"]
