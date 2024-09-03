# from django.test import TestCase

# from sample_app.models import Students

# class TestStudents(TestCase):
#     def setUp(self):
#         self.student = Students.objects.create(
#             first_name = "XiaoJiaopi",
#             last_name = "Muturi",
#             address = "Kiamumbi",
#             roll_number = 123,
#             mobile = "0799001556",
#         )
        
#     def test_student_creation(self):
#         self.assertEqual(self.student.first_name, "Shawn")
#         self.assertEqual(self.student.last_name, "Muturi")
#         self.assertEqual(self.student.address, "Kiamumbi")
#         self.assertEqual(self.student.roll_number, 123)
#         self.assertEqual(self.student.mobile, "0799001556")
        
        
#     def test_first_name_unique(self):
#         with self.assertRaises(Exception):
#             Students.objects.create(
#             first_name = "Shawn",
#             last_name = "Muturi",
#             address = "Kiamumbi",
#             roll_number = 123,
#             mobile = "0799001556",
#             )
#     def test_roll_number_unique(self):
#         with self.assertRaises(Exception):
#             Students.objects.create(
#             first_name = "Shawn",
#             last_name = "Muturi",
#             address = "Kiamumbi",
#             roll_number = 123,
#             mobile = "0799001556",
#             )
            
