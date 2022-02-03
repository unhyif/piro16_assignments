# Generated by Django 4.0.1 on 2022-01-14 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_alter_review_rating_alter_review_running_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='genre',
            field=models.CharField(choices=[('ACT', '액션'), ('COM', '코미디'), ('DR', '드라마'), ('RO', '로맨스'), ('HO', '공포'), ('TH', '스릴러'), ('SF', 'SF'), ('FAN', '판타지'), ('ANI', '애니메이션'), ('DOC', '다큐멘터리'), ('IN', '독립영화'), ('ETC', '기타')], max_length=3, verbose_name='장르'),
        ),
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.FloatField(choices=[(0.5, 0.5), (1.0, 1.0), (1.5, 1.5), (2.0, 2.0), (2.5, 2.5), (3.0, 3.0), (3.5, 3.5), (4.0, 4.0), (4.5, 4.5), (5.0, 5.0)], verbose_name='별점'),
        ),
    ]