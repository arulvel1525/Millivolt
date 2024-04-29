import tensorflow as tf
from tensorflow.keras.models import load_model

keras_model = load_model('my_model.h5')

tf.saved_model.save(keras_model,'path/to/saved_model')