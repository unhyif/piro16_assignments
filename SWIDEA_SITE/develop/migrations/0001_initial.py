# Generated by Django 4.0.1 on 2022-01-19 12:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='>> 이름')),
                ('kind', models.CharField(max_length=20, verbose_name='>> 종류')),
                ('description', models.TextField(verbose_name='>> 개발툴 설명')),
            ],
        ),
        migrations.CreateModel(
            name='Idea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20, verbose_name='>> 아이디어명')),
                ('image', models.ImageField(blank=True, upload_to='', verbose_name='>> 대표 사진')),
                ('content', models.TextField(verbose_name='>> 아이디어 설명')),
                ('interest', models.IntegerField(verbose_name='>> 아이디어 관심도')),
                ('devtool', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ideas', to='develop.tool', verbose_name='>> 예상 개발툴')),
            ],
        ),
    ]
