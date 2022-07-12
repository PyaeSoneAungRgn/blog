---
title: Laravel Initializer
publish_date: 2021-10-14
---

ကျွန်တော်တို့ Laravel project တစ်ခုကို setup လုပ်ပြီဆိုတာနဲ့ composer install တွေ၊ migration တွေ၊ admin user အသစ် လုပ်တာတွေ နဲ့ တခြား command ‌တွေကို run ဖို့လိုပါတယ်။ အဲ့လို run တဲ့ အခါမှာလည်း တခါတလေ ဘာပြီးရင် ဘာ run ရမလဲ ဆိုတဲ့ readme မရှိရင် တိုင်တော်တော် ပတ်ပါတယ်။

**Laravel  Initializer** ကတော့ project setup လုပ်ဖို့ လိုအပ်တာတွေကို production‌ ရော၊ local ရော စနစ်တကျ run ဖို့အတွက် စီစဉ်ပေးတဲ့ package တစ်ခုပါ။

### Installation
```bash
composer require mad-web/laravel-initializer
php artisan vendor:publish --tag=initializers
``` 
ဒါဆိုရင် **app** folder ‌အောက်မှာ **Install.php** နဲ့ **Update.php** ဆိုပြီး file ၂ ခု ရလာပါမယ်။


> Install.php

```php
<?php

namespace App;

use MadWeb\Initializer\Contracts\Runner;

class Install
{
    public function production(Runner $run)
    {
        $run->external('composer', 'install', '--no-dev', '--prefer-dist', '--optimize-autoloader')
            ->artisan('key:generate', ['--force' => true])
            ->artisan('migrate', ['--force' => true])
            ->artisan('storage:link')
            ->external('npm', 'install', '--production')
            ->external('npm', 'run', 'production')
            ->artisan('route:cache')
            ->artisan('config:cache')
            ->artisan('event:cache');
    }

    public function local(Runner $run)
    {
        $run->external('composer', 'install')
            ->artisan('key:generate')
            ->artisan('migrate')
            ->artisan('storage:link')
            ->external('npm', 'install')
            ->external('npm', 'run', 'development');
    }
}
``` 
**.env** မှာ production ဆိုရင် production function ကို run မှာဖြစ်ပြီး local ဆိုရင် local function ကို run မှာပါ။

### Usage
```bash
php artisan app:install
``` 
**Install.php** ကို run မှာပါ။


```bash
php artisan app:update
``` 
**Update.php** ကို run မှာပါ။

အသေးစိတ်ကို  [ဒီမှာ](https://github.com/mad-web/laravel-initializer) ကြည့်လို့ရပါတယ်။