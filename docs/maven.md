# Maven

## 配置

### 配置源

参考[阿里源maven源](https://developer.aliyun.com/mirror/maven)

编辑`vim <MAVEN_HOME>/conf/settings.xml`文件，在`</mirrors>`标签内添加
```xml
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```
