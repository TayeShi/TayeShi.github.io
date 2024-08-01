# Maven

## 基本介绍

### 作用

### 安装

#### 安装

#### 配置源

## 配置标签

`<groupId>`:com.{公司/BU }.业务线.\[子业务线]，最多 4 级。

`<artifactId>`:产品线名-模块名

`<version>`:主版本号.次版本号.修订号 1.0.0

`<packaging>`:指示将项目打包为什么类型的文件，idea根据packaging值，识别maven项目类型

- `jar`:（default）普通java工程，打包后文件以.jar结尾 
- `war`: Java的web工程，打包后文件以.war结尾
- `pom`: 不会打包，作为用来做继承的父工程



`<scope>`: 指定依赖生效范围

- compile: main目录 test目录  打包打包 [默认]
- provided: main目录 test目录  Servlet
- runtime: 打包运行           MySQL
- test: test目录           junit

`<proerties>`: 配置声明版本

 `<dependencyManagement>`: 用于父工程配置对依赖项的管理，还没有真正引入到工程中

`<dependencies>`: 依赖项配置

`<dependency>`: 具体依赖项



完整参考： 

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <!-- ?指定父工程 -->
    <parent>
        <groupId>com.aaa.bbb</groupId>
        <artifactId>xxx</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <!-- ?指定本工程 -->
    <groupId>com.aaa.bbb</groupId>
    <version>1.0-SNAPSHOT</version>
    <!-- 模块名 -->
    <artifactId>xxx</artifactId>
    <!-- 打包方式， [jar, war, pom] -->
    <packaging>pom</packaging>
    
    <!-- 配置管理 -->
    <proerties>
        <!-- 指定依赖项版本 -->
        <xxx.version>xxx</xxx.version>
        
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </proerties>
   
    <!-- ?父工程配置dependencyManagement统一管理依赖版本, 用于子项目，这里不会直接引入依赖项-->
    <dependencyManagement>
         <dependencies>
            <dependency>
                <groupId>xxxx</groupId>
                <artifactId>xxx</artifactId>
                <version>${xxx.version}</version>
            </dependency>
             <!-- ... -->
        </dependencies>
    </dependencyManagement>
    
    <!-- ?本工程依赖项 -->
    <dependencies>
        <dependency>
        	<groupId>xxxx</groupId>
            <artifactId>xxx</artifactId>
            <!-- ?如果父工程统一配置了，就不用 -->
            <version>${xxx.version}</version>
        </dependency>
    </dependencies>
</project>
```







