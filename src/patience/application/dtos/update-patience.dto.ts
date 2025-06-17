import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsOptional } from 'class-validator';

export class UpdatePatienceDto {
    @ApiPropertyOptional({ description: 'Name of the patience' })
    @IsString()
    @IsOptional()
    hn: string;
    firstName: string;
    lastName: string;
    dob: string;
    idCard: string;
    phone: string;
    Address: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // hn: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // companyId: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // CID: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // DateOfBirth: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // Gender: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // Address: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // PhoneNumber: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // Bloodtype: string;
    // @ApiPropertyOptional({ description: 'Name of the patience' })
    // @IsString()
    // @IsOptional()
    // Occupation: string;
}
