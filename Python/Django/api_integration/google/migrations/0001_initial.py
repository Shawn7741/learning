# Generated by Django 5.1 on 2024-08-28 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(help_text='Address of the location', max_length=250)),
                ('latitude', models.FloatField(blank=True, help_text='Latitude of the location', null=True)),
                ('longitude', models.FloatField(blank=True, help_text='Longitude of the location', null=True)),
                ('town', models.CharField(blank=True, help_text='Town/Suburb of the location', max_length=100, null=True)),
                ('county', models.CharField(blank=True, help_text='County of the location', max_length=100, null=True)),
                ('country', models.CharField(blank=True, help_text='Country of the location', max_length=100, null=True)),
            ],
        ),
    ]