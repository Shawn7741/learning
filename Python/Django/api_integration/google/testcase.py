from django.test import TestCase
from django.core import mail

class ContactTest(TestCase):
    def test_post(self):
        with self.captureOn 